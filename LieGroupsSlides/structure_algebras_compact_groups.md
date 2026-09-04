---
marp: true
---

### Recap: Cartan criteria etc.

$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\fz}{\mathfrak{z}}
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
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\ker}{\text{ker} \, }
\newcommand{\tr}{\text{trace}}
\newcommand{\derg}{\text{Der}(\fg)}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$

- If $\exists \ \fg$-module $\ (V, \rho) \ {}$ such that 
$$
B_V(\xi,\eta) = \tr (\rho(\xi) \rho(\eta)) 
$$
$\qquad{}$ is non-degenerate, then $\fg$ is reductive.
$~$
- $\fg$ is semisimple $\quad \Longleftrightarrow \quad \kappa\ {}$ is nondegenerate.
$~$
- $\fg$ is solvable $\quad \Longleftrightarrow \quad \kappa([\fg, \fg], \fg) = 0$.
$~$
$~$
$~$


---

***Claim:*** The classical Lie algebras are reductive. Further, for $F = \R, \C$,
- $sl(n, F); so(n, F), n > 2; su(n); sp(n, F)\ {}$ are semisimple.
- $gl(n, F)\ {}$ and $\ u(n) \ {}$ have one-dimensional centers: 

$$
gl(n,F)= (F \, \idm_n) ⊕ sl(n,F) \sands 
u(n)= (i\, \R \,  \idm_n) ⊕ su(n).
$$
$~$
*Verify reductive:* Let $V = F^n\ {}$ for the appropriate field $F$, except for $\ V = F^{2 n}\ {}$ for $\ sp(n, F)$.

To show non-degeneracy of 
$$
 B(\xi, \eta) = \tr (\xi \eta) = \textstyle{\sum_{j, k = 1}^\ell }\xi_{jk} \eta_{kj},
 \qquad \ell = n \ \ \text{or}\ \ 2n,
$$
note that
$$
B(\xi, \xi^*) = \tr(\xi \xi^*) = \tr(\xi^* \xi) = \textstyle{\sum_{j, k = 1}^\ell } |\xi_{jk}|^2
$$
implies $\ B(\xi, \cdot) = 0 \quad \Longleftrightarrow \quad \xi = 0$.

----

## Properties of Lie algebras of compact Lie groups

If $G$ is a compact real Lie group, with Lie algebra $\fg,  \ {}$ then 
1. $\fg$ is reductive,
2. the Killing form $\kappa$ of $\fg$ is negative semi-definite, 
3. $\ker \kappa = \fz(\fg)$,
4. $\fg/\fz(\fg)\ {}$ is semisimple, with negative definite Killing form.
$~$

*Verify:* Let $(V, {\rm P})\ {}$ be a complex $n$-dimensional $G$-representation (upper case $ρ$ looks like ${\rm P}$), 
and $(V, ρ)\ {}$ the associated $\fg$-module. 

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
$$
\ker B_V = \ker ρ.
$$

---

Application to the complexified adjoint representation $\Ad: G → GL(\fg, \C)\ {}$ and the complexification of the $\fg$-module $(\fg, \ad)\ {}$ gives
- $\kappa\ {}$ is negative semi-definite, 
- $\ker \kappa = \ker \ad = \fz(\fg)$,
- $\fg/\fz(\fg)\ {}$ is semisimple, and hence $\ \fg\ {}$ is reductive.


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
f(\phi)_{ij} := \phi([\xi_i, \xi_j]) - [\phi(\xi_i), \phi(\xi_j)].
$$
$f$ is continuous, so $\text{Aut}(\fg) = f^{-1}(0) \ {}$ is closed.
$~$
$δ ∈ \text{End}(\fg) \ {}$ is a *derivation* of $\fg$ if
$$
δ([\xi, \eta])=[δ (\xi),\eta]+[\xi ,δ (\eta)] \qquad \forall\ \xi, \eta ∈ \fg.
$$
The space $\ \derg\ {}$ of all derivations of $\fg$ is the Lie algebra of $\ \text{Aut}(\fg)\ {}$.

---

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
***Claim:*** $\ \ad(\fg)\ {}$ is an ideal of $\ \derg$. 

*Verify:* For any derivation $δ$ of $\fg$ and $\xi, \zeta \in \fg$,
$$\eqa{
[δ,\ad_\zeta](\xi) &= \color{blue}{δ([\zeta, \xi])} \color{black}{− [\zeta, δ(\xi)]} \\
&= \color{blue}{[δ(\zeta), \xi] + [\zeta, δ(\xi)]} \color{black}{− [\zeta, δ(\xi)]} \\
&= \ad_{δ(\zeta)}(\xi).
}
$$

---

***Example:*** $\ \text{Der}(sl(2, \C))$ 

If
$$
δ(e) = x \, e + y\, f + z \, h \sands δ(f) = u \, e  + v\, f + w \, h,
$$
for some scalars $\ x, y, z, u, v, w, \ {}$ then
$$\eqa{
δ(h) &= δ([e, f])\\
&=[ δ(e), f ] + [e, δ(f) ] \\
&= −2\,w\,e − 2\,z\,f + (x + v)h .
}
$$
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

---

Finally, 
$$
-2 \, f = [h, f] \qquad \Longrightarrow \qquad \ u = 0.
$$
Hence
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
Hence $\ \text{Der}(sl(2, \C)) \approx sl(2, \C)$.

---

***Claim:*** $\fg$ semisimple $\quad \Longrightarrow \quad \derg \approx \fg$.
$~$
*Verify:* The Cartan criterion for semisimple algebras $\quad \Longrightarrow \quad {}$ the Killing form $\ \kappa_{\fg}\ {}$ of $\fg$ is non-degenerate.
$~$
$\ \kappa_{\fg}\ {}$ equals the restriction to $\ \ad(\fg)\ {}$ of the invariant bilinear form
$$
B(δ_1,δ_2) = \tr(δ_1δ_2)
$$
on $\derg$.
$~$
Define 
$$
\setdef {I} δ \derg {B(δ, \ad_\xi) = 0 \quad \forall \ \xi ∈ \fg}.
$$

Non-degeneracy of $\ \kappa_{\fg}\quad \Longrightarrow$
$$
I ∩ \ad(\fg) = \triv.
$$

---

We showed that $\ \ad(\fg) \ {}$ is an ideal of $\ \derg\ {}$; hence $\ I \ {}$ is an ideal, and
$$
[I, \ad(\fg)] \subseteq I ∩ \ad(\fg) = \triv.
$$
$~$
$δ \in I \quad \Longrightarrow$
$$
0 = [δ, \ad_\xi] = \ad_{δ(\xi)} \qquad \forall \ \xi \in \fg.
$$
$~$
Semisimplicity of $\fg \quad \Longrightarrow \quad \fz(\fg) = \triv \quad \Longrightarrow \quad  \ad: \fg \to \text{Der}(\fg) \ {}$ is injective, so
$$
\ad_{δ(\xi)} = 0  \quad \forall \ \xi \in \fg \qquad \Longrightarrow \qquad δ = 0.
$$

Hence $I = \triv$
.
We don’t know that $B$ is nondegenerate on $\derg$, so we can't immediately  conclude that $\derg = \ad(\fg)$.

We need to use the nondegeneracy of $\kappa_\fg$.

---

Given $\ δ ∈ \derg, \quad \exists! \ \xi \in \fg$ satisfying
$$
B(δ, \ad_\eta) = K_\fg(\xi, \eta) \qquad \forall \eta \in \fg.
$$
Hence
$$\eqa{
B(δ− \ad_\xi, \ad_\eta)&= B(δ, \ad_\eta) - B(\ad_\xi, \ad_\eta) \\
&= B(δ, \ad_\eta) - \kappa_\fg(\xi, \eta) \\
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
(not covered during lecture&mdash;was going to be an informal in-class/on Zoom activity)
$~$
We showed earlier today that $\ \text{Aut}(\fg)\ {}$ is a closed Lie subgroup of $\ GL(\fg)$. 

Let $G$ be a connected Lie group with algebra $\fg$. 
(Lie's Theorems guarantee such a $G$ exists.)

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
\kappa_\fg(\Ad_g(\xi), \Ad_g(\eta)) &= \tr(\ad_{\Ad_g(\xi)}\, \ad_{\Ad_g(\eta)}) \\
&= \tr(\Ad_g \,\ad_\xi \,\Ad_{g^{-1}} \,\Ad_g \,\ad_\eta\, \Ad_{g^{-1}}) \\
&= \tr (\ad_\xi \,\ad_\eta) \\
&= \kappa_\fg(\xi, \eta),
}
$$
so $\kappa_\fg$ is invariant w.r.t. inner automorphisms $\ \Ad_g, \ g \in G. \ {}$

Negative-definiteness of $\ \kappa_\fg \ \Longrightarrow \ - \kappa_\fg\ {}$ is an $\Ad(G)$-invariant inner product on $\fg,\ {}$ so 
$$
\Ad(G) \subseteq O(\fg),
$$
the group of orthogonal transformations of $\fg$. 

Since $\ \text{Aut}(\fg)\ {}$ is closed in $\ GL(\fg), \ {}$ and $\ \Ad(G) \, {}$ is a  connected component of $\, \text{Aut}(\fg),$ compactness of $\ \Ad(G)\ {}$ follows from that of $\ O(\fg) \ {}$ (shown on the next slide). 

---

A choice of orthonormal basis for $\fg$ determines an isomorphism of $\ O(\fg)\ {}$ with $\ O(n, \R), \ {}$ where $n = \text{dim} \, \fg$.
$~$
*Recap (?):* $\ O(n, \R), \ {}$ is compact.

$O(n, \R)\ {}$ is the preimage of $\ \idm_{\!n}\ {}$ w.r.t. continuous map $\ A \mapsto A^TA, \ {}$ 
$\Longrightarrow \ O(n, \R)\ {}$ is closed.

$A \in O(n, \R) \ {}$ satisfies 
$$\eqa{|A|^2 &= \textstyle{\sum_{j, k = 1}^\ell } a_{jk}^2 \\
&= \tr{A^T A} \\
&= \tr(\idm_{\!n}) \\
&= n,
}
$$
where $|A|$ is the usual norm on $\ gl(n, \R) \approx \R^{n \times n}$, so $\ O(n, \R)\ {}$ is bounded, 
$\Longrightarrow \ O(n, \R)\ {}$ is  compact. 











