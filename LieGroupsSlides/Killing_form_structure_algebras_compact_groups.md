---
marp: true
paginate: true
---

### The Killing form

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\fz}{\mathfrak{z}}
\newcommand{\radg}{\text{rad}(\fg)}
\newcommand{\tr}{\text{trace}\,}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calB}{{\cal B}}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\derg}{\mbox{Der}(\fg)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$The *Killing form* $\ \kappa: \fg \times \fg \to F,\ F = \R\ {}$ or $\ \C, \ {}$ is given by
$$
\kappa(\xi, \eta) = \text{trace}(\ad_\xi \, \ad_\eta).
$$
$~$
The Killing form is symmetric, bilinear, and $\ad$-invariant. 
$~$
*Verify $\ad$-invariance of the Killing form:* $\quad{}$ For any $\xi, \eta, \zeta \in \fg$,
$$
\eqa{
\kappa(\ad_\xi(\eta), \zeta) &= \text{trace}(\ad_{[\xi, \eta]} \, \ad_\zeta) \\
&= \text{trace}((\ad_\xi \ad_\eta - \ad_\eta \ad_\xi) \ad_\zeta) \\
&= \text{trace}(\ad_\eta (\ad_\zeta \ad_\xi - \ad_\xi \ad_\zeta)) \\
&= \text{trace}(\ad_\eta \ad_{[\zeta, \xi]} )  \\
&= - \kappa(\eta, \ad_\xi(\zeta)).
}
$$

---

***Example:*** $sl(2, \C)$

The basis vectors $\quad
e = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad
f = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \quad
h = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}
$
$~$
satisfy $\quad [e, f] = h, \quad [h, e] = 2 \, e, \quad [h, f] = -2\, f,\ {}$ so w.r.t. basis $\{e, f, h\}$,
$~$
$$
\ad_e = \begin{bmatrix} 0 & 0 & −2 \\ 0 & 0 & 0 \\0 & 1 & 0 
\end{bmatrix}, \qquad
\ad_f = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 2 \\  -1 & 0  & 0
\end{bmatrix}, \qquad
\ad_h = \begin{bmatrix} 2 & 0 & 0 \\ 0 & -2 & 0 \\ 0  & 0 & 0
\end{bmatrix}.
$$
$~$
The nonzero basis vector pairings are $\ 
\kappa(e, f) = 4\ {}$ and $\ \kappa(h, h) = 8. \ {}$ Hence
$$
\kappa(\xi, \eta) = 4 \, \text{trace}(\xi \, \eta) \qquad \forall \ \xi, \eta \in sl(2, \C).\phantom{X^\int}
$$

---

***Example:*** $so(3, \R)$

If we identify $\ so(3, \R)\ {}$ with $(\R^3, \times),\ {}$ then
$$\eqa{
\ad_\xi(\ad_\eta(\zeta))& = \xi \times (\eta \times \zeta) \\
&= \langle \xi, \zeta \rangle \eta - \langle \xi, \eta \rangle \zeta   \\
&= \lp \eta \xi^T - \langle \xi, \eta \rangle \idm \rp \zeta
}
$$
$\Longrightarrow$
$$\eqa{
  \kappa(\xi, \eta) &= \text{trace} (\ad_\xi \circ \ad_\eta) \\
  &= \text{trace} \lp \eta \xi^T - \langle \xi, \eta \rangle \idm \rp \\
  &= - 2 \langle \xi, \eta \rangle.
}
$$
$~$
The Killing form of $so(3, \R)$ is negative-definite. 

---

### Cartan’s criteria for solvability and semisimplicity 

- $\fg$ is solvable $\quad \Longleftrightarrow \quad \kappa([\fg, \fg], \fg) = 0$.

- $\fg$ is semisimple $\quad \Longleftrightarrow \quad \kappa\ {}$ is nondegenerate.

$~$

*Verify solvabililty criterion*  "$\Longleftarrow$":

Suppose that $\kappa([\xi, \eta], \zeta) = 0 \quad \forall \ \xi, \eta, \zeta \in \fg$.

$\text{ker} \, \ad = \fz(\fg)\ {}$ is solvable.

Hence it suffices to show that 

$$\text{range}\ \ad \approx \fg/\fz(\fg)$$ 
is solvable, which follows from a more general result, taking $V = (\fg, \ad)$.

---

***Lemma***
If $\fg ⊆ \text{End}(V)$, then  
$$
\tr([\xi, \eta] \zeta) = 0 \qquad \forall \ \ \xi, \eta, \zeta \in \fg \qquad \Longrightarrow \qquad \fg \ \text{solvable}.
$$
$~$
*Verify:* Let 
$$
\xi = \xi_{ss} + \xi_n
$$
be the Jordan decomposition of $\xi \in [\fg, \fg]$, and let $\bar \xi_{ss}$ denote the element of $\fg$ with the same eigenspaces as those of $\xi_{ss},\ {}$ but with eigenvalues that are the complex conjugates of the corresponding eigenvalues $λ_1, \ldots ,λ_n$ of $\xi_{ss}$.

$\tr (\xi_n \bar \xi_{ss}) = 0 \quad \Longrightarrow$
$$
\tr (\xi \bar \xi_{ss}) = \tr (\xi_{ss} \bar \xi_{ss}) = \textstyle {\sum_j} |λ_j|^2.
$$

---

Jordan Decomposition consequences include 
$$\ad_{\bar \xi_{ss}} = Q(\ad_\xi)$$
for some polynomial $Q$ with no constant term.
$~$
$\xi ∈ [\fg,\fg] \quad \Longrightarrow \quad \xi = \sum_k[\eta_k, \zeta_k],\ {}$ for some $\eta_k, \zeta_k \in \fg$, so
$$
\tr (\xi \bar \xi_{ss}) = \sum_k \tr \lp [\eta_k, \zeta_k] \bar \xi_{ss} \rp 
= - \sum_k \tr \lp [\bar \xi_{ss}, \zeta_k]  \eta_k \rp .
$$

Since
$$
\ad_{\bar \xi_{ss}} \zeta_k = Q(\xi_{ss}) \zeta_k 
= Q(\xi_{ss}) \zeta_k  \in [\fg, \fg]
$$
$\Longrightarrow \quad \tr \lp [\bar \xi_{ss}, \zeta_k]  \eta_k \rp = 0, \ {}$

---

we have 
$$
\textstyle {\sum_j} |λ_j|^2 = \tr (\xi \bar \xi_{ss}) = 0.
$$
Hence $λ_1 = \cdots = λ_n = 0$, so $\xi$ is nilpotent.
$~$
Engel’s theorem ($\fg$ is nilpotent $\ \ \Longleftrightarrow \ \ \ad_\xi$ is nilpotent for all $\xi \in \fg$)
$\Longrightarrow \quad [\fg, \fg]\ {}$ is nilpotent
$\Longrightarrow \quad \fg$ is solvable.
$~$
This completes the proof of the lemma, and of the "$\Longleftarrow$" of Cartan's solvabililty criterion.
$~$
$~$
$~$

---

*Verify solvabililty criterion:* “$\Longrightarrow$”: &nbsp; 

Suppose that $\fg$ is solvable.

Lie’s theorem $\Longrightarrow \quad \exists$ basis of $\fg$ with respect to which the matrix representation $A(\xi)$ of $\ad_\xi$ is upper triangular for any $\xi \in \fg$.

For any $\xi, \eta, \zeta \in \fg$, 

$\Longrightarrow\quad A([\xi, \eta]) = [A(\xi), A(\eta)]\ {}$ is strictly upper triangular

$\Longrightarrow\quad A([\xi, \eta]) A(\zeta) \ {}$ is strictly upper triangular

$\Longrightarrow$
$$\eqa{
 \kappa([\xi, \eta], \zeta) &= \tr(\ad_{[\xi, \eta]} \ad_\zeta)  \\
&= \tr (A([\xi, \eta]) A(\zeta))\\
&= 0.
}
$$

---

*Verify semisimplicity criterion*  "$\Longrightarrow$":

Nondegeneracy of $\kappa \quad \Longrightarrow \quad \fg\ {}$ is reductive.

$\xi \in \fz(\fg) \quad \Longrightarrow \quad \ad_\xi = 0 \quad \Longrightarrow \quad \kappa(\xi, \eta) = \tr(\ad_\xi \ad_\eta) = 0 \qquad \forall \eta \in \fg$.

Nondegeneracy of $\kappa \quad \Longrightarrow \quad\xi = 0$.

$\fg$ reductive and $\fz(\fg) = \{ 0 \} \quad \Longrightarrow \quad \fg\ {}$ is semisimple.

"$\Longleftarrow$":

$I := \text{ker} \, \kappa \ {}$ is an ideal.

The Killing form $\kappa_I$ of $I$ is the restriction of $\kappa$ to $I$, and hence is zero.

Cartan’s criterion for solvability $\quad \Longrightarrow \quad I\ {}$ is solvable.

Semisimplicity of $\fg \quad \Longrightarrow \quad I = \text{ker} \, \kappa \ {}$ is trivial.

-------

## Properties of Lie algebras of compact Lie groups

If $G$ is a compact real Lie group, with Lie algebra $\fg,  \ {}$ then 
1. $\fg$ is reductive,
2. the Killing form $\kappa$ of $\fg$ is negative semi-definite, 
3. $\ker \kappa = \fz(\fg)$,
4. $\fg/\fz(\fg)\ {}$ is semisimple, with negative definite Killing form.
$~$

*Verify:* Let $(V, {\rm P})\ {}$ be a complex $n$-dimensional $G$-representation, and $(V, ρ)\ {}$ the associated $\fg$-module. 

Compactness of $G \quad \Longrightarrow \quad {\rm P}\ {}$ is unitary, so
$$
ρ(\fg) ⊆ u(V) \approx \setdef {u(n)} \xi {\C^{n \times n}} {\xi + \xi^* = 0}.
$$

---

The bilinear form 
$$
B(\xi, \eta) = \tr (\xi \, \eta)
$$ 
on $u(n)$ is negative definite, since 
$$\eqa{
B(\xi, \xi) &= \tr (\xi \, \xi) \\
&= \tr (\xi (- \xi^*)) \\
&= - \tr (\xi^* \xi) \\
&= - \sum_{j, k = 1}^n |\xi|^2_{jk}.
}
$$

Hence $\ ρ(\fg) ⊆ u(V) \quad \Longrightarrow$
$$
B_V(\xi, \eta) = \tr (ρ(\xi)ρ(\eta))
$$
is negative semi-definite, with 

---

$$
\ker B_V = \ker ρ.
$$
$~$
Application to the complexified adjoint representation $\Ad: G → GL(\fg, \C)\ {}$ and the complexification of the $\fg$-module $(\fg, \ad)\ {}$ gives
- $\kappa\ {}$ is negative semi-definite, 
- $\ker \kappa = \ker \ad = \fz(\fg)$,
- $\fg/\fz(\fg)\ {}$ is semisimple, and hence $\ \fg\ {}$ is reductive.

$~$
$~$
$~$
$~$
$~$

---


### $\text{Aut}(\fg)\ {}$ and derivations of Lie algebras

***Claim:*** If $\fg$ is a finite dimensional Lie algebra, then
$$
\setdef{\text{Aut}(\fg)} \phi {GL(\fg)} {\phi([\xi, \eta]) = [\phi(\xi), \phi(\eta)]}
\qquad \forall \ \xi, \eta ∈ \fg
$$
is a closed Lie subgroup of $\ GL(\fg)$.
$~$
*Verify:* $\text{Aut}(\fg)\ {}$ is a subgroup of $\ GL(\fg)$.

Given a basis $\ \{\xi_1, \ldots, \xi_n \}\ {}$ of $\fg, \ {}$ define $\ f: GL(\fg) \to \fg^{n \times n}\ {}$ by
$$
f(\phi)_{ij} := \phi([\xi_i, \xi_j]) - [\phi(\xi_i), \phi(\xi_j)]. \phantom{X^{|int^\int}}
$$
$~$
$f$ is continuous, so $\text{Aut}(\fg) = f^{-1}(0) \ {}$ is closed.
$~$

---

$δ ∈ \text{End}(\fg) \ {}$ is a *derivation* of $\fg$ if
$$
δ([\xi, \eta])=[δ (\xi),\eta]+[\xi ,δ (\eta)] \qquad \forall\ \xi, \eta ∈ \fg. \phantom{X^\int_\int}
$$
The space $\ \derg\ {}$ of all derivations of $\fg$ is the Lie algebra of $\ \text{Aut}(\fg)\ {}$.
$~$
***Example:*** $\ \ad_\zeta \ {}$ is a derivation $\ \forall \zeta ∈ \fg, \ {}$ since 
$$\eqa{
\ad_\zeta([\xi, \eta]) - [\ad_\zeta(\xi), \eta] - [\xi, \ad_\zeta(\eta)]
&= [\zeta, [\xi, \eta]] - [[\zeta, \xi], \eta] - [\xi, [\zeta, \eta]] \\
&= [\zeta, [\xi, \eta]] + [\eta, [\zeta, \xi]] + [\xi, [\eta, \zeta]] \\
&= 0.
}
$$
follows from the Jacobi identity. 
$~$
$\ \ad_\zeta \ {}$ is called an *inner derivation*.
$~$

---

***Claim:*** $\ \ad(\fg)\ {}$ is an ideal of $\ \derg$. 

*Verify:* For any derivation $δ$ of $\fg$ and $\xi, \zeta \in \fg$,
$$\eqa{
[δ,\ad_\zeta](\xi) &= \color{blue}{δ([\zeta, \xi])} \color{black}{− [\zeta, δ(\xi)]} \\
&= \color{blue}{[δ(\zeta), \xi] + [\zeta, δ(\xi)]} \color{black}{− [\zeta, δ(\xi)]} \\
&= \ad_{δ(\zeta)}(\xi).
}
$$
$~$
***Example:*** $\ \text{Der}(sl(2, \C))$ 

$$
δ(e) = x \, e + y\, f + z \, h \sands δ(f) = u \, e  + v\, f + w \, h \phantom{X_{\int_\int}}
$$
$$\eqa{
 \Longrightarrow \qquad \qquad \qquad \qquad \qquad δ(h) &= δ([e, f])\\
&=[ δ(e), f ] + [e, δ(f) ] \\
&= −2\,w\,e − 2\,z\,f + (x + v)h .\qquad \qquad \qquad \qquad \qquad \qquad
}
$$

---

Analogously,
$$
2e = [h, e] \qquad \Longrightarrow \qquad 2\, δ(e) = [δ(h), e] + [h, δ(e)]% \qquad \Longrightarrow \qquad 
$$
and hence
$$\eqa{
2(x \, e + y \, f + z \, h)
&= [−2 \, w \, e  − 2 \, z \, f + (x + v) h, e] + [h, x \, e + y \,f  + z \, h ]\\
&= 2(x + v)e + 2 \, x \, e − 2 \, y \, f + 2 \, y \, h.
}
$$
$\Longrightarrow \quad y = 0 = x + v.$

$~$
Finally, 
$$
-2 \, f = [h, f] \qquad \Longrightarrow \qquad \ u = 0.
$$
$~$
Combining these calculations yields

---

$$\eqa{
δ(e) &= x \, e + z \, h\\
&= \smallfrac x 2 \, [h, e] - z \, [f, e] \\ \\
δ(f) &=w \, h − x\, f \\
&= w \, [e, f] + \smallfrac x 2 \, [h, f]  \\ \\
δ(h) &= −2\,w\, e − 2\,z\,f \\
&= w \, [e, h] - z\, [f, h].
}
$$
$~$
$$
\Longrightarrow \qquad \qquad \qquad \qquad \qquad δ = w \, \ad_e − z \, \ad_f +  \smallfrac x 2 \, \ad_h.\qquad \qquad \qquad \qquad \qquad
$$
$~$
Hence $\ \text{Der}(sl(2, \C)) \approx sl(2, \C)$.

---

***Claim:*** $\fg$ semisimple $\quad \Longrightarrow \quad \derg \approx \fg$.
$~$
*Verify:* Cartan semisimplicity criterion $\quad \Longrightarrow \quad {}$ the Killing form of $\fg$ is non-degenerate.
$~$
$\ \kappa\ {}$ equals the restriction to $\ \ad(\fg)\ {}$ of the invariant bilinear form
$$
B(δ_1,δ_2) = \tr(δ_1δ_2)
$$
on $\derg$.
$~$
Define 
$$
\setdef {I} δ \derg {B(δ, \ad_\xi) = 0 \quad \forall \ \xi ∈ \fg}.
$$

Non-degeneracy of $\ \kappa \quad \Longrightarrow$
$$
I ∩ \ad(\fg) = \triv.
$$

---

We showed that $\ \ad(\fg) \ {}$ is an ideal of $\ \derg\ {}$; hence $\ I \ {}$ is an ideal, and
$$
[I, \ad(\fg)] \subseteq I ∩ \ad(\fg) = \triv.
$$

$δ \in I \quad \Longrightarrow$
$$
0 = [δ, \ad_\xi] = \ad_{δ(\xi)} \qquad \forall \ \xi \in \fg.
$$
$~$
Semisimplicity of $\fg \quad \Longrightarrow \quad \fz(\fg) = \triv \quad \Longrightarrow \quad  \ad: \fg \to \text{Der}(\fg) \ {}$ is injective, so
$$
\ad_{δ(\xi)} = 0  \quad \forall \ \xi \in \fg \qquad \Longrightarrow \qquad δ = 0.
$$

Hence $I = \triv$.
.
We don’t know that $B$ is nondegenerate on $\derg$, so we can't immediately  conclude that $\derg = \ad(\fg)$. We need to use the nondegeneracy of $\kappa$.

---

Given $\ δ ∈ \derg, \quad \exists! \ \xi \in \fg$ satisfying
$$
B(δ, \ad_\eta) = \kappa(\xi, \eta) \qquad \forall \eta \in \fg.
$$
Hence
$$\eqa{
B(δ− \ad_\xi, \ad_\eta)&= B(δ, \ad_\eta) - B(\ad_\xi, \ad_\eta) \\
&= B(δ, \ad_\eta) - \kappa(\xi, \eta) \\
&= 0.
}
$$
Hence
$$
δ− \ad_\xi \in I = \triv, \qquad \text{so} \qquad δ = \ad_\xi,
$$
and $\ \ad: \fg → \derg\ {}$ is an isomorphism.
$~$
***Consequence:*** $\fg$ semisimple $\quad \Longrightarrow \quad \fg\ {}$ is the Lie algebra of $\ \text{Aut}(\fg)$.

---

### $\ \exists \ {}$ compact group with Lie algebra $\fg$

We showed earlier today that $\ \text{Aut}(\fg)\ {}$ is a closed Lie subgroup of $\ GL(\fg)$. 
$~$

Lie's Theorems guarantee there is a connected Lie group $G$ with algebra $\fg$. 
$~$
$\ \Ad(G)\ {}$ is the connected component of $\ \text{Aut}(\fg)\ {}$ containing the identity.

$$\eqa{
\Ad_g(\ad_\xi(\eta)) &= \Ad_g([\xi, \eta]) \\
&= [\Ad_g(\xi), \Ad_g(\eta)]) \\
&= \ad_{\Ad_g(\xi)}(\Ad_g(\eta))
}
$$
$\forall \ \xi, \eta \in \fg$, i.e. 
$$
\ad_{\Ad_g(\xi)}\, \Ad_g  = \Ad_g \,\ad_\xi. 
$$

---

Hence
$$
\ad_{\Ad_g(\xi)}  = \Ad_g \, \ad_\xi \, \Ad_{g^{-1}}
$$ 
and
$$\eqa{
\kappa(\Ad_g(\xi), \Ad_g(\eta)) &= \tr(\ad_{\Ad_g(\xi)}\, \ad_{\Ad_g(\eta)}) \\
&= \tr(\Ad_g \,\ad_\xi \,\Ad_{g^{-1}} \,\Ad_g \,\ad_\eta\, \Ad_{g^{-1}}) \\
&= \tr (\ad_\xi \,\ad_\eta) \\
&= \kappa(\xi, \eta),
}
$$
so $\kappa$ is invariant w.r.t. inner automorphisms $\ \Ad_g, \ g \in G. \ {}$
$~$
Negative-definiteness of $\ \kappa_\fg \ \Longrightarrow \ - \kappa\ {}$ is an $\Ad(G)$-invariant inner product on $\fg,\ {}$ so 
$$
\Ad(G) \subseteq O(\fg),
$$
the group of orthogonal transformations of $\fg$. 

---

$O(n, \R)\ {}$ is compact.
$~$
A choice of orthonormal basis for $\fg$ determines an isomorphism of $\ O(\fg)\ {}$ with $\ O(n, \R), \ {}$ where $n = \text{dim} \, \fg$.
$~$
Since $\ \text{Aut}(\fg)\ {}$ is closed in $\ GL(\fg), \ {}$ and $\ \Ad(G) \, {}$ is a  connected component of $\, \text{Aut}(\fg),$ compactness of $\ \Ad(G)\ {}$ follows from that of $\ O(\fg) \ {}$. 

$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
