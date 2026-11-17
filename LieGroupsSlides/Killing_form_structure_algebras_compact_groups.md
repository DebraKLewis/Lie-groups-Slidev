## The Killing form

The *Killing form* $\ \kappa: \fg \times \fg \to F,\ F = \R\ {}$ or $\ \C, \ {}$ is given by
$$
\kappa(\xi, \eta) := \text{trace}(\ad_\xi \, \ad_\eta).
$$

The Killing form is symmetric, bilinear, and $\ad$-invariant. 
<Spacer size="1px"/>

*Verify $\ad$-invariance:*  For any ${\color{red}\xi}, {\color{blue}\eta}, {\color{green}\zeta} \in \fg$,
$$
\eqa{
\kappa(\ad_{\color{red}\xi}({\color{blue}\eta}),{\color{green}\zeta}) 
&= \text{trace}(\underbrace{\ad_{[{\color{red} \xi},{\color{blue}\eta}]}} \ad_{\color{green}\zeta}). \\
& \qquad \qquad \ \, = [\ad_{\color{red}\xi}, \ad_{\color{blue}\eta}] = {\ad_{\color{red}\xi} \ad_{\color{blue}\eta} - \, \ad_{\color{blue}\eta} \ad_{\color{red}\xi}} \\
%&= \text{trace}(\underbrace{\ad_{[{\color{red} \xi},{\color{blue}\eta}]}}_{\ad_{\color{red}\xi} \ad_{\color{blue}\eta} - \, \ad_{\color{blue}\eta} \ad_{\color{red}\xi}} \, \ad_{\color{green}\zeta}) \\
%&= \text{trace}((\ad_{\color{red}\xi} \ad_{\color{blue}\eta} - \ad_{\color{blue}\eta} \ad_{\color{red}\xi}) \ad_{\color{green}\zeta})
}
$$
Cyclic permutation of $\, \ad_{\color{red}\xi} \ad_{\color{blue}\eta}\ad_{\color{green}\zeta} \,{}$ yields
$$
\eqa{
\kappa(\ad_{\color{red}\xi}({\color{blue}\eta}),{\color{green}\zeta}) 
&= \text{trace}(\ad_{\color{blue}\eta} (\ad_{\color{green}\zeta} \ad_{\color{red}\xi} - \ad_{\color{red}\xi} \ad_{\color{green}\zeta})) \\
&= - \text{trace}(\ad_{\color{blue}\eta} \ad_{[{\color{red}\xi}, {\color{green}\zeta} ]} )  \\
&= - \kappa({\color{blue}\eta}, \ad_{\color{red}\xi}({\color{green}\zeta})).
}
$$

---

### Example: The Killing form of $\mathfrak{so}(3, \R) \approx (\R^3, \times)$

If we identify $\ \mathfrak{so}(3, \R)\ {}$ with $(\R^3, \times),\ {}$ then
$$
\eqa{
\ad_\xi(\ad_\eta(\zeta))& = \xi \times (\eta \times \zeta) \\
&= (\xi^T \zeta ) \eta - (\xi^T\eta) \zeta   \\
&= \lp \eta \, \xi^T - (\xi^T\eta) \,  \idm \rp \zeta
}
$$
$\Longrightarrow$
$$
\eqa{
  \kappa(\xi, \eta) &= \text{trace} (\ad_\xi \, \ad_\eta) \\
  &= \text{trace} \lp \eta \, \xi^T - (\xi^T\eta) \, \idm \rp \\
  &= - 2 \, \xi^T\eta.
}
$$
<Spacer size="5px"/>

The Killing form of $(\R^3, \times)$ is the rescaling by $-2$ of the Euclidean inner product.

$\Longrightarrow \ \ {}$ the Killing form of $\mathfrak{so}(3, \R) \approx (\R^3, \times)$ is negative-definite. 

---

### Example: the Killing form of $\mathfrak{sl}(2, \C)$

[Recall](sl2-homogeneous-polynomials) that 
<!--
$\quad
\fsl = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \quad
\hsl = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}, \quad
\esl = \begin{bmatrix} 0 & 1\\ 0 & 0 \end{bmatrix}
$

satisfy 
-->
$$
[\esl, \fsl] = \hsl, \sands [\hsl, \xi_\pm] = \pm 2 \, \xi_\pm, 
$$ 
so the matrices with respect to the basis $\{\fsl, \hsl, \esl\}$ for the infinitesimal adjoint actions are

$$
\eqa{
\ad_\fsl &= 2 \, \ev_1 \ev_2^T - \ev_2 \ev_3^T \\ 
\ad_\hsl \, &= 2 \lp \ev_3 \ev_3^T - \ev_1 \ev_1^T \rp \\
\ad_\esl &= \ev_2 \ev_1^T - 2 \, \ev_3 \ev_2^T,
}
$$
where $\{ \ev_1, \ev_2, \ev_3\}$ is the standard Euclidean basis of $\R^3$. $\quad \ev_j^T \ev_k = \delta_{jk} \quad \Longrightarrow$

$$
\eqa{
\ad_\fsl \ad_\esl &= \lp 2 \, \ev_1 \ev_2^T - \ev_2 \ev_3^T \rp 
\lp \ev_2 \ev_1^T - 2 \, \ev_3 \ev_2^T \rp \\
&= 2 \, \ev_1 \ev_1^T + 2 \, \ev_2 \ev_2^T 
} 
$$
$\text{trace} \lp\ev_j \ev_k^T \rp = \delta_{jk} \quad \Longrightarrow \quad
\kappa(\fsl, \esl) = \text{trace}(\ad_\fsl \, \ad_\esl)
= 4.\phantom{\sum^X}
$

---

#### Second slide of the calculation of the Killing form of $\mathfrak{sl}(2, \C)$

Analogously,
$$
\eqa{
\ad_\hsl \ad_\esl &= 2 \lp \ev_3 \ev_3^T - \ev_1 \ev_1^T \rp 
\lp \ev_2 \ev_1^T - 2 \, \ev_3 \ev_2^T \rp \\
&= 4 \, \ev_1 \ev_2^T
} 
$$
$\Longrightarrow$
$$
\kappa(\hsl, \esl) = \text{trace}(\ad_\hsl \, \ad_\esl) = 0.
$$
<Spacer size="5px"/>

Continuing in this fashion shows that the only nonzero Killing form pairings of the basis vectors are
$$
\kappa(\fsl, \esl)= \kappa(\esl, \fsl)  = 4  \sands \kappa(\hsl, \hsl) = 8.
$$
  

<!--
$$
\ad_\fsl = \begin{bmatrix} 0 & 2 & 0 \\ 0 & 0 & -1 \\0 & 0 & 0 
\end{bmatrix}, \qquad
\ad_\hsl = \begin{bmatrix} -2 & 0 & 0 \\ 0 & 0 & 0 \\ 0  & 0 & 2
\end{bmatrix}, \qquad
\ad_\esl = \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\  0 & -2  & 0
\end{bmatrix}.
$$

---

The nonzero basis vector pairings are $\ 
\kappa(\esl, \fsl) = 4\ {}$ and $\ \kappa(\hsl, \hsl) = 8. \ {}$ 

Hence
$$
\kappa(\eta, \zeta) = 4 \, \text{trace}(\eta \, \zeta) \qquad \forall \ \eta, \zeta \in \mathfrak{sl}(2, \C).\phantom{X^\int}
$$

-->
---
routeAlias: Jordan–Chevalley-decomposition
---

### Semisimple elements and the Jordan–Chevalley decomposition

An element $\xi$ of a Lie algebra $\fg$ is *semisimple* if $\ad_\xi$ is *potentially diagonalizable*, i.e. can be diagonalized over the algebraic closure of the field in question.

Under appropriate conditions, $\exists \ {}$ semisimple $\xi_{s} \in \fg$ and nilpotent $\xi_n \in \fg$ satisfying
$$
\xi = \xi_{s} + \xi_n \sands [\xi_{s}, \xi_n] = 0.
$$
This is called the (additive) [Jordan–Chevalley decomposition](https://en.wikipedia.org/wiki/Jordan%E2%80%93Chevalley_decomposition) (AKA abstract Jordan decomposition) of $\xi$.
<Spacer size="5px"/>

***Relationship to the Jordan normal form:*** Given $A \in GL(n, \C)$ and invertible matrix $U$ such that <br/>
$U A U^{-1}$ is in Jordan normal form, if $D$ is the diagonal matrix with diagonal entries equalling those of $U A U^{-1}$, then

- $A_{s} := U^{-1}D U \, {}$ is diagonalizable, and 

- $A_n := A - A_{s}$ is nilpotent.
$$

---

#### Some properties of the Jordan–Chevalley decomposition

- $\ad_{\xi_s} \ad_{\xi_n}$ is nilpotent

- $\xi_s$ and $\xi_n$ are $\kappa$-orthogonal, i.e. $\kappa(\xi_s, \xi_n) = 0.$

- If $V$ is a finite dimensional vector field over $\C$, every element of $\mathfrak{gl}(V)$ has a Jordan–Chevalley decomposition

*In-class group exercise: Verify the first two claims.* $\phantom{\sum^X}$
<Spacer size="5px"/>


A Lie algebra $\fg$ is *semisimple* if it can be expressed as a direct sum of simple Lie algebras, i.e. it contains no nonzero solvable ideals.

Any simple Lie algebra is semisimple.
<Spacer size="1px"/>

- If $\fg$ is semisimple, every element of $\fg$ has a Jordan–Chevalley decomposition.
<Spacer size="1px"/>


*Verification later (time permitting)*.

---

### Radicals and solvable ideals

The *radical* $\radg$ of a Lie algebra $\fg$ is the unique maximal solvable ideal of $\fg$.

***Claim:*** 

1. $\fg$ is semisimple $\ \ \Longleftrightarrow \ \ \radg$ is trivial.

2. $\fg/\radg$ is semisimple.

3. If $\mathfrak{b}$ is a solvable ideal in $\fg,\ \ 
\fg/\mathfrak{b} \ \ \text{semisimple} \ \ \Longrightarrow \ \ \mathfrak{b} = \radg.$

4. (Levi Theorem) For any Lie algebra $\fg, \ \exists \ {}$ a semisimple subalgebra $\fg_s$ of $\fg$ such that
$$
\fg = \radg \oplus \fg_{s}
$$
*Verify (sketch):*

---

#### Second slide of verfication of features of radicals 

<Spacer size="15px"/>

2. Let $I$ be a solvable ideal in $\ \fg/\radg$.

$\quad{}$ If $\pi: \fg \to \fg/\radg\ {}$ denotes projection onto the quotient,
$\ I \ {}$ and $\ \radg\ {}$ solvable $\ \ \Longrightarrow$
$$
\tilde I := \pi^{-1}(I)
$$
$\quad{}$ is solvable.

$$
\eqa{
\tilde I \supseteq \radg \supseteq \tilde I \quad &\Longrightarrow \quad \tilde I = \radg  \\
\quad &\Longrightarrow \quad I = \tilde I/\radg = \{0\}.
}
$$
<Spacer size="5px"/>

3. NTS any solvable ideal in $\fg$ is contained in $\mathfrak{b}$.

$\quad \ \fg/\mathfrak{b}\ {}$ semisimple $\quad \Longrightarrow \quad \text{rad}(\fg/\mathfrak{b}) = \{0\}$

$\qquad \qquad \qquad \qquad \ \ \ \Longrightarrow\ \radg \subseteq \mathfrak{b}$.

$\quad {}$ Maximality of $\radg \quad \Longrightarrow \quad \mathfrak{b} = \radg$.

---

### Eigenvalues and the radical

***Claim:*** If $(V, \rho)\ {}$ is an irreducible complex $\fg$-module, then $\ \exists \ \lambda: \radg \to \C\ {}$ satisfying

1. $\rho(\xi) = \lambda(\xi) \idm_V \qquad \quad \forall \ \xi \in \radg$

2. $\lambda([\fg, \radg]) = \{0\}$.
<Spacer size="5px"/>

*Verify:* $\ \ 1.\ {}$ $\radg\,{}$ [solvable $\quad {}$$\Longrightarrow$](solvable-1d-submodule) $\quad \exists \ \lambda: \radg \to \C\ {}$ and $0 \neq v_0 \in V\ {}$ such that
$$
\rho(\eta)(v_0) = \lambda(\eta) v_0 \qquad \quad \forall \ \eta \in \radg.
$$

The subspace
$$
V_\lambda := \cap_{\eta \in \radg} \text{ker} (\rho(\eta) - \lambda(\eta) \idm_{\!V})
$$
is nontrivial, since it contains $v_0$. 

---

#### Second slide of verification of the relationship between eigenvalues and the radical

Let $v, \xi, \eta$ denote arbitrary elements of $V_\lambda, \fg, \ {}$ and $\radg$.
$$
\rho(\eta) \circ \rho(\xi) = \rho(\!\!\underbrace{[\eta, \xi]}_{\in \ \radg}\!\!) + \rho(\xi) \circ \rho(\eta) 
$$
$\Longrightarrow$
$$
\eqa{
(\rho(\eta) - \lambda(\eta) \idm_{\!V})(\rho(\xi)(v))&=   
\underbrace{\rho([\eta, \xi])(v)}_{= \,\lambda([\eta, \xi]) v} 
+ \rho(\xi)(\underbrace{\rho(\eta)(v)}_{= \, \lambda(\eta) v}) - \lambda(\eta)\rho(\xi)(v) \\
&= \lambda([\eta, \xi]) v \in V_\lambda,\phantom{\sum^x} 
} 
$$
so $\ V_\lambda\ {}$ is a $\fg$-submodule.

Irreducibility of $V\quad \Longrightarrow \quad V_\lambda = V$.

---

#### Third slide of verification of the relationship between eigenvalues and the radical

*Verify 2.:* $\ \ {}$ Let $v, \xi, \eta$ denote arbitrary elements of $V_\lambda, \fg, \ {}$ and $\radg$.

$\radg$ solvable $\quad \Longrightarrow \quad [\fg, \radg]\ {}$ is either trivial or $\radg$.
<Spacer size="1px"/>

If $[\fg, \radg] = \{0\}, \ {}$  nothing to show. 
<Spacer size="1px"/>

$[\fg, \radg] = \radg\quad \Longrightarrow \quad \ {}$ for any $v \in V, \xi \in \fg, \eta \in \radg, \ {}$
$$
\eqa{
\lambda([\xi, \eta]) v &= \rho([\xi, \eta])(v) \phantom{\sum} \\
&= \rho(\xi)(\rho(\eta)(v)) - \rho(\eta)(\rho(\xi)(v)) \phantom{\sum}\\
&= \rho(\xi)(\lambda(\eta)v) - \lambda(\eta)\rho(\xi)(v) \phantom{\sum}\\
&= 0.
}
$$



---

### Cartan’s criteria for solvability and semisimplicity 

- $\fg$ is solvable $\quad \Longleftrightarrow \quad \kappa([\fg, \fg], \fg) = 0$.

- $\fg$ is semisimple $\quad \Longleftrightarrow \quad \kappa\ {}$ is nondegenerate.

<Spacer size="1px"/>
*Verify solvabililty criterion:* “$\Longrightarrow$”: &nbsp; 

If $\fg$ is solvable, Lie’s theorem $\quad \Longrightarrow \quad \exists\,{}$ basis of $\fg$ with respect to which the matrix representation $A(\xi)$ of $\ad_\xi$ is upper triangular for any $\xi \in \fg$.

$\Longrightarrow \ \ {}$ for any $\xi, \eta, \zeta \in \fg$, 
$\ \  A([\xi, \eta]) = [A(\xi), A(\eta)]\ {}$ is strictly upper triangular

$\Longrightarrow\quad A([\xi, \eta]) A(\zeta) \ {}$ is strictly upper triangular

$$
\eqa{
\Longrightarrow \qquad\qquad\qquad\qquad\qquad \kappa([\xi, \eta], \zeta) &= \text{trace}(\ad_{[\xi, \eta]} \ad_\zeta)  \qquad\qquad\qquad\qquad\qquad\qquad\qquad\qquad\qquad\qquad\\
&= \text{trace} (A([\xi, \eta]) A(\zeta))\\
&= 0.
}
$$

---

#### Lemma: a solvability condition for $\fg ⊆ \text{End}(V)$

The proof of the  "$\Longleftarrow$" direction of the solvability criterion uses the following lemma:
<Spacer size="1px"/>

***Lemma***
If $\fg ⊆ \text{End}(V)$, then $\fg$ is solvable $\ \ \Longleftrightarrow \ \ {}$ 
$$
\text{trace}([\xi, \eta] \zeta) = 0 \qquad \forall \ \ \xi, \eta, \zeta \in \fg .
$$

*Verify:* Let 
$
\xi = \xi_{s} + \xi_n
$
be the [Jordan–Chevalley (JC) decomposition](Jordan-Chevalley-decomposition) of $\xi \in [\fg, \fg]$, and let $\bar \xi_{s}$ denote the element of $\fg$ with the same eigenspaces as those of $\xi_{s},\ {}$ but with eigenvalues that are the complex conjugates of the corresponding eigenvalues $λ_1, \ldots ,λ_n$ of $\xi_{s}$.

$\kappa$-orthogonality of the factors of the JC decomposition $\ \ \Longrightarrow \ \ \text{trace} (\xi_n \bar \xi_{s}) = 0 \quad \Longrightarrow$
$$
\text{trace} (\xi \bar \xi_{s}) = \text{trace} (\xi_{s} \bar \xi_{s}) = \textstyle {\sum_j} |λ_j|^2.
$$

Another feature of the JC decomposition is the existence of a polynomial $Q$ such that
$$
\ad_{\bar \xi_{s}} = Q(\ad_\xi) \sands Q(0) = 0.
$$

---

#### Second slide of proof of lemma

$\xi ∈ [\fg,\fg] \quad \Longrightarrow \quad \xi = \sum_k[\eta_k, \zeta_k],\ {}$ for some $\eta_k, \zeta_k \in \fg\quad \Longrightarrow$
$$
\eqa{
\text{trace} (\xi \bar \xi_{s}) &= \sum_k \text{trace} \lp [\eta_k, \zeta_k] \bar \xi_{ss} \rp \\
&= - \sum_k \text{trace} \lp [\bar \xi_{s}, \zeta_k]  \eta_k \rp .
}
$$

$
[\bar \xi_{s}, \zeta_k] = [Q(\xi_{s}), \zeta_k ] \in [\fg, \fg]
\quad \Longrightarrow \quad \text{trace} \lp [\bar \xi_{s}, \zeta_k]  \eta_k \rp = 0 \ {}$

we have 
$$
\textstyle {\sum_j} |λ_j|^2 = \text{trace} (\xi \bar \xi_{s}) = 0.
$$
Hence $λ_1 = \cdots = λ_n = 0$, so $\xi$ is nilpotent.
$~$
Engel’s theorem ($\fg$ is nilpotent $\ \ \Longleftrightarrow \ \ \ad_\xi$ is nilpotent for all $\xi \in \fg$)
$\Longrightarrow \quad [\fg, \fg]\ {}$ is nilpotent
$\Longrightarrow \quad \fg$ is solvable.
<Spacer size="1px"/>

This completes the proof of the lemma.

---

#### Back to the proof of Cartan's solvability criterion

*Verification of the solvability criterion*  "$\Longleftarrow$":

Suppose that $\kappa([\xi, \eta], \zeta) = 0 \quad \forall \ \ \xi, \eta, \zeta \in \fg$.

$\text{ker} \, \ad = Z(\fg)\ {}$ solvable $\ \ \Longrightarrow \ \ {}$
it suffices to show that 
$$\text{range}\ \ad \approx \fg/Z(\fg)$$ 
is solvable, which follows from the lemma on the next slide, taking $V = (\fg, \ad)$.


---

#### Proof of Cartan's semisimplicity criterion

 "$\Longrightarrow$": $\quad{}$ Nondegeneracy of $\kappa \quad \Longrightarrow \quad \fg\ {}$ is reductive.

$$
\eqa{
\xi \in Z(\fg) \quad &\Longrightarrow \quad \ad_\xi = 0 \phantom{\sum} \\
&\Longrightarrow \quad \kappa(\xi, \eta) = \text{trace}(\ad_\xi \ad_\eta) = 0 \qquad \forall \ \eta \in \fg.
}
$$

Nondegeneracy of $\kappa \quad \Longrightarrow \quad\xi = 0$.

$\fg$ reductive and $\, Z(\fg) = \{ 0 \} \quad \Longrightarrow \quad \fg\ {}$ is semisimple.
<Spacer size="5px"/>

"$\Longleftarrow$":$\quad \ I := \text{ker} \, \kappa \ {}$ is an ideal.

The Killing form $\kappa_I$ of $I$ is the restriction of $\kappa$ to $I$, and hence is zero.

Cartan’s criterion for solvability $\quad \Longrightarrow \quad I\ {}$ is solvable.

Semisimplicity of $\fg \quad \Longrightarrow \quad I = \text{ker} \, \kappa \ {}$ is trivial.

<!--

JUST TEMPORARY UNTIL CLEANED UP!
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

-->