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

A Lie algebra $\fg$ is *semisimple* if it can be expressed as a direct sum of simple Lie algebras, i.e. it contains no onzero nontrivial solvable ideals.

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

$\ \ 1.\ \ ``\Longrightarrow" \ \ \ \fg$ semisimple $\ \ \Longrightarrow \ \ \fg$ has has no nontrivial solvable ideals. 

$\ \ \ \ \ \ ``\Longleftarrow" \ \ \ {}$ triviality of the maximal solvable ideal $\ \ \Longrightarrow \ \ \fg$ has no nontrivial solvable ideals. 

---

#### Second slide of verification of features of radicals 

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

$\qquad \qquad \qquad \qquad \ \ \ \Longrightarrow\quad \radg \subseteq \mathfrak{b}$.

$\quad {}$ Maximality of $\radg \quad \Longrightarrow \quad \mathfrak{b} = \radg$.

---
routeAlias: relationship-eigenvalues-radical
---

<!-- What the heck is going on? Why won't this update to GitHub? I am so confused -->

### Diagonalizability of the action of the radical on an irreducible $\fg$-module

***Claim:*** If $(V, \rho)\ {}$ is a finite dimensional irreducible complex $\fg$-module, then $\ \exists \ \lambda: \radg \to \C\ {}$ satisfying

1. $\rho(\xi) = \lambda(\xi) \idm_V \qquad \quad \forall \ \xi \in \radg$

2. $\lambda([\fg, \radg]) = \{0\}$.
<Spacer size="5px"/>

*Verify:* $\ \ 1.\ {}$ $\radg\,{}$ [solvable $\quad {}$$\Longrightarrow$](solvable-1d-submodule) $\quad \exists \ \lambda: \radg \to \C\ {}$ and $0 \neq v_0 \in V\ {}$ such that
$$
\rho(\eta)(v_0) = \lambda(\eta) v_0 \qquad \quad \forall \ \eta \in \radg.
$$

For notational concision, define $\sigma_\lambda: \radg \to \text{End}(V)$ by 
$$
\sigma_\lambda(\eta) := \rho(\eta) - \lambda(\eta) \idm_{V}
$$
and
$$
V_\lambda := \cap_{\eta \in \radg} \text{ker} \, \sigma_\lambda(\eta).
$$

---

#### Synopsis of the [proof of the diagonalizability claim](proof-relationship-eigenvalues-radical)
<Spacer size = "15px"/>

1. $V_\lambda$ is $\fg$-invariant, and hence is a $\fg$-submodule. Since $V$ is irreducible and $V_\lambda \supseteq \text{span}\{v_0\}$ is nontrivial, $V_\lambda = V$. 

The $\fg$-invariance of $V_\lambda$ can be shown using a [Rube Goldbergian](https://www.rubegoldberg.org/all-about-rube/cartoon-gallery/) (to my eye) upper triangular matrix construction involving a sequence of nested subspaces $W_0 \subseteq W_1 \subseteq W_2 \cdots \ {}$ given by
$$
W_0 := V_\lambda \sands W_{j + 1} := W_j + \rho(\fg)(W_j),
$$
analysis of the induced actions on the quotients $W_{j + 1}/W_j$, and Jordan Normal Form-style choices of bases.
<Spacer size = "5px"/>

2. is proved, and then used, near the end of the proof of 1.:

$[\eta, \xi] \in \radg$ for any $\eta \in\radg, \xi \in \fg$, so $\rho([\eta, \xi])$ has the unique eigenvalue $\lambda([\eta, \xi])$. 

$$
\text{trace} \, \rho([\eta, \xi]) = \text{trace} \, [\rho(\eta), \rho(\xi)] = 0
$$

$\Longrightarrow \ \  \lambda([\eta, \xi]) = 0$, which shows that the off-diagonal terms in the upper triangular matrices equal $0$.

---
routeAlias: Cartan-solvability-semisimplicity-criteria
---

### Cartan’s criteria for solvability and semisimplicity 

- $\fg$ is solvable $\quad \Longleftrightarrow \quad \kappa([\fg, \fg], \fg) = 0$.

- $\fg$ is semisimple $\quad \Longleftrightarrow \quad \kappa\ {}$ is nondegenerate.

<Spacer size="1px"/>
*Verify solvabilility criterion:* “$\Longrightarrow$”: &nbsp; 

If $\fg$ is solvable, [Lie’s theorem](Lie-solvable-upper-triangular) $\quad \Longrightarrow \quad \exists\,{}$ basis of $\fg$ with respect to which the matrix representation $A(\xi)$ of $\ad_\xi$ is upper triangular for any $\xi \in \fg$.

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

 "$\Longrightarrow$": $\quad{}$ Assume $\fg$ has an Abelian ideal $\mathfrak{a}$. 
 
For any $\zeta \in \mathfrak{a}$ and $\xi \in \fg$, $\ad_\zeta \ad_\xi: \fg \to \mathfrak{a}$. 

$\mathfrak{a}$ Abelian $\ \ \Longrightarrow \ \ (\ad_\zeta \ad_\xi)^2 = 0$, so $\ad_\zeta \ad_\xi$ is nilpotent

$\Longrightarrow \ \ \kappa(\zeta, \xi) = \text{trace}(\ad_\zeta \ad_\xi) = 0$.

Nondegeneracy of $\kappa \ \ \Longrightarrow \ \ \mathfrak{a} = \{0\} \ \ \Longrightarrow \ \ 
\fg$ has no nontrivial Abelian ideals $\ \ \Longrightarrow \ \ \fg$ is semisimple.

<!--
 "$\Longrightarrow$": $\quad{}$ Nondegeneracy of $\kappa \quad \Longrightarrow \quad \fg\ {}$ is *reductive*, i.e. $\fg = [\fg, \fg] \oplus Z(\fg)$.

$$
\eqa{
\xi \in Z(\fg) \quad &\Longrightarrow \quad \ad_\xi = 0 \phantom{\sum} \\
&\Longrightarrow \quad \kappa(\xi, \eta) = \text{trace}(\ad_\xi \ad_\eta) = 0 \qquad \forall \ \eta \in \fg.
}
$$

Nondegeneracy of $\kappa \quad \Longrightarrow \quad\xi = 0$.

$\fg$ reductive and $\, Z(\fg) = \{ 0 \} \quad \Longrightarrow \quad \fg = [\fg, \fg]\ {}$ is semisimple.
-->

<Spacer size="5px"/>

"$\Longleftarrow$":$\quad \ I := \text{ker} \, \kappa \ {}$ is an ideal.

The Killing form $\kappa_I$ of $I$ is the restriction of $\kappa$ to $I$, and hence is zero.

Cartan’s criterion for solvability $\quad \Longrightarrow \quad I\ {}$ is solvable.

Semisimplicity of $\fg \quad \Longrightarrow \quad I = \text{ker} \, \kappa \ {}$ is trivial.


---
routeAlias: Aut-closed-subgroup
---

### $\text{Aut}(\fg)\ {}$ and derivations of Lie algebras

$δ ∈ \text{End}(\fg) \ {}$ is a *derivation* of $\fg$ if
$$
δ([\xi, \eta])=[δ (\xi),\eta]+[\xi ,δ (\eta)] \qquad \qquad \forall\ \xi, \eta ∈ \fg. 
$$
<Spacer size="1px"/>

***Claim:*** If $\fg$ is a finite dimensional Lie algebra, then
$$
\setdef{\text{Aut}(\fg)} \phi {GL(\fg)} {\phi([\xi, \eta]) = [\phi(\xi), \phi(\eta)]}
\qquad \forall \ \xi, \eta ∈ \fg
$$
is a closed Lie subgroup of $\,GL(\fg)\,{}$ with Lie algebra $\,\text{Der}(\fg)$, the space of derivations of $\fg$.

*Verify:* First show that $\text{Aut}(\fg)\ {}$ is a closed subgroup of $\ GL(\fg)$.

Given a basis $\ \{\xi_1, \ldots, \xi_n \}\ {}$ of $\fg, \ {}$ define $\ f: GL(\fg) \to \fg^{n \times n}\ {}$ by
$$
f(\phi)_{ij} := \phi([\xi_i, \xi_j]) - [\phi(\xi_i), \phi(\xi_j)]. \phantom{X^{|int^\int}}
$$

$f$ continuous $\ \ \Longrightarrow \ \ \text{Aut}(\fg) = f^{-1}(0) \ {}$ is closed $\ \ \Longrightarrow \ \ \text{Aut}(\fg)$ is a closed Lie subgroup of $\,GL(\fg)$.

---

#### Verification that $\text{Der}(\fg)$ is the Lie algebra of $\, \text{Aut}(\fg)$
<Spacer size="1px"/>

Let $\text{aut}(\fg)$ denote for now the Lie algebra of $\, \text{Aut}(\fg)$, and 
$\exp_{\!\text{Aut}}: \text{aut}(\fg) \to \text{Aut}(\fg)$ denote the exponential map of $\, \text{Aut}(\fg)$.

Given $\psi \in \text{aut}(\fg)$ and $\xi, \eta \in \fg$, the Product Rule $\ \ \Longrightarrow$
$$
\eqa{
\psi([\xi, \eta]) &= \dep {\exp_{\!\text{Aut}}(\epsilon \, \psi)([\xi, \eta])}\phantom{\sum}\\
&= \dep {[\exp_{\!\text{Aut}}(\epsilon \, \psi)(\xi), \exp_{\!\text{Aut}}(\epsilon \, \psi)(\eta)]} \phantom{\sum}\\
&= [\psi(\xi), \eta] + [\xi, \psi(\eta)]
}
$$
$\Longrightarrow \ \ \psi \in \text{Der}(\fg)$.
<Spacer size="1px"/>

Given $\delta \in \text{Der}(\fg)$ and $\xi, \eta \in \fg$,  
$$
\exp_{\!\text{Aut}}(t\, \delta) = \sum_{n = 0}^\infty \frac {t^n} {n!} \delta^n([\xi, \eta]).
$$

---

#### Verification that $\text{Der}(\fg) \subseteq \text{aut}(\fg)$
<Spacer size="1px"/>

$$
\eqa{
\smallfrac {t^n} {n!} \delta^n([\xi, \eta]) 
&= \sum_{k=0}^n\binom{n}{k}\left[\frac {t^k} {k!} \delta^k(\xi), \frac {t^{n - k}} {(n - k)!} \delta^{n-k}(\eta)\right].
}
$$
Hence, re-indexing the following double sum as a Cauchy product,
$$
\eqa{
\exp_{\!\text{Aut}}(t\, \delta)([\xi, \eta]) &= \sum_{n = 0}^\infty \sum_{k=0}^n\binom{n}{k}\left[\frac {t^k} {k!} \delta^k(\xi), \frac {t^{n - k}} {(n - k)!} \delta^{n-k}(\eta)\right] \\
&= \sum_{n = 0}^\infty \sum_{j = 0}^\infty\left [ \frac {t^k} {k!} \delta^k(\xi), \frac {t^j} {j!} \delta^{j}(\eta)\right] \\
&= [\exp_{\!\text{Aut}}(t\, \delta)(\xi), \exp_{\!\text{Aut}}(t\, \delta)(\eta)]
}
$$

$\Longrightarrow\ \ {}$ the one parameter subgroup of $GL(\fg)$ determined by $\delta$ is a subgroup of $\text{Aut}(\fg)$

$\Longrightarrow\ \ \delta \in \text{aut}(\fg)$.

---

### $\ \ad(\fg)\ {}$ is an ideal of $\ \text{Der}(\fg)\ {}$ 

*Verify:* For any ${\color{red}\xi}, {\color{blue}\eta}, {\color{green}\zeta} \in \fg$, the Jacobi identity $\ \ \Longrightarrow$
$$
\eqa{
\ad_{\color{green}\zeta}([{\color{red}\xi}, {\color{blue}\eta}]) - ([\ad_{\color{green}\zeta}({\color{red}\xi}),{\color{blue}\eta}] + [{\color{red}\xi}, \ad_{\color{green}\zeta}({\color{blue}\eta})])
&= [{\color{green}\zeta}, [{\color{red}\xi}, {\color{blue}\eta}]] - [[{\color{green}\zeta}, {\color{red}\xi}], {\color{blue}\eta}] - [{\color{red}\xi}, [{\color{green}\zeta}, {\color{blue}\eta}]] \\
&= [{\color{green}\zeta}, [{\color{red}\xi}, {\color{blue}\eta}]] + [{\color{blue}\eta}, [{\color{green}\zeta}, {\color{red}\xi}]] + [{\color{red}\xi}, [{\color{blue}\eta}, {\color{green}\zeta}]] \\
&= 0,
}
$$
so $\ad(\fg)$ is a subalgebra of $\ \text{Der}(\fg)$. 

<Spacer size="5px"/>

For any derivation ${\color{green}\delta}$ of $\fg$ and ${\color{red}\xi}, {\color{blue}\eta} \in \fg$,
$$
\eqa{
[{\color{green}\delta},\ad_{\color{blue}\eta}]({\color{red}\xi}) &= {\color{green}\delta}([{\color{blue}\eta}, {\color{red}\xi}]) − [{\color{blue}\eta}, {\color{green}\delta}({\color{red}\xi})] \\
&= ([{\color{green}\delta}({\color{blue}\eta}), {\color{red}\xi}] + [{\color{blue}\eta}, {\color{green}\delta}({\color{red}\xi})]) − [{\color{blue}\eta}, {\color{green}\delta}({\color{red}\xi})] \\
&= \ad_{{\color{green}\delta}({\color{blue}\eta})}({\color{red}\xi}),
}
$$
so $\ad(\fg)$ is an ideal. Elements of $\ad(\fg)$ are called *inner derivations*.


---

### Example: $\ \text{Der}(\mathfrak{sl}(2, \C))$ 

The bracket relationships between the basis vectors $\fsl,\hsl, \esl \ \ \Longrightarrow \ \ \delta \in \text{Der}(\mathfrak{sl}(2, \C))$ satisfies
$$
\eqa{
- 2\, δ(\fsl) &= δ([\hsl, \fsl]) \\
&= [δ(\hsl), \esl] + [\hsl, δ(\esl)] \phantom{\sum_x} \\
δ(\hsl) &= δ([\esl, \fsl]) \\
&=[ δ(\esl), \fsl ] + [\esl, δ(\fsl) ]\phantom{\sum_x} \\
2\, δ(\esl) &= δ([\hsl, \esl]) \\
&= [δ(\hsl), \esl] + [\hsl, δ(\esl)].
}
$$

If
$$
δ(\esl) = x \, \esl + y\, \fsl + z \, \hsl \sands δ(\fsl) = u \, \esl  + v\, \fsl + w \, \hsl, \phantom{X_{\int_\int}}
$$
then...

---

#### Second slide of calculation of $\ \text{Der}(\mathfrak{sl}(2, \C))$ 
<Spacer size="5px"/>

$$
\eqa{
δ(\hsl) 
&=[ δ(\esl), \fsl ] + [\esl, δ(\fsl) ] \\
&= −2\,w\,\esl − 2\,z\,\fsl + (x + v)\hsl
}
$$
$\Longrightarrow$
$$
\eqa{
- 2 \, δ(\fsl) &= [δ(\hsl), \fsl] + [\hsl, δ(\fsl)] \\
&= [−2 \, w \, \esl  − 2 \, z \, \fsl + (x + v) \hsl, \fsl] + [\hsl, u \, \esl + v \,\fsl  + w \, \hsl ]\\
&= - 2 \lp (x + 2 \, v)\esl  − 2 \, u \, \fsl + w \, \hsl \rp
}
$$
$\Longrightarrow \quad u = 0 = x + v,$ and 
$$
\eqa{
2 \, δ(\esl) &= [δ(\hsl), \esl] + [\hsl, δ(\esl)] \\
&= [−2 \, w \, \esl  − 2 \, z \, \fsl + (x + v) \hsl, \esl] + [\hsl, x \, \esl + y \,\fsl  + z \, \hsl ]\\
&= 2 \lp (2 \, x + v)\esl − y \, \fsl + z \, \hsl \rp
}
$$
$\Longrightarrow \quad y = 0 = x + v$.


---

#### Third slide of calculation of $\ \text{Der}(\mathfrak{sl}(2, \C))$ 
<Spacer size="5px"/>

Combining these calculations yields

$$
\eqa{
δ(\fsl) &=w \, \hsl − x\, \fsl \\
&= w \, [\esl, \fsl] + \smallfrac x 2 \, [\hsl, \fsl]  \\ 
&= [\underline{\quad} \ \fsl + \smallfrac x 2 \, \hsl + w \, \esl, \fsl] ,\\ 
\\
δ(\hsl) &= −2\,w\, \esl − 2\,z\,\fsl \\
&= w \, [\esl, \hsl] - z\, [\fsl, \hsl] \\
&= [− z \, \fsl + \underline{\quad} \  \hsl + w \,  \esl, \hsl],
}
$$
and
$$
\eqa{
δ(\esl) &= x \, \esl + z \, \hsl\\
&= \smallfrac x 2 \, [\hsl, \esl] - z \, [\fsl, \esl] \\ 
&= [− z \, \fsl + \smallfrac x 2 \, \hsl + \underline{\quad} \ \esl, \esl].
}
$$

---

#### Fourth slide of calculation of $\ \text{Der}(\mathfrak{sl}(2, \C))$ 
<Spacer size="5px"/>

$
\Longrightarrow \ \ δ = \ad_\eta\ {}$ for
$$
\eta := − z \, \fsl +  \smallfrac x 2 \, \hsl + w \, \esl.
$$

$\Longrightarrow \ \ \text{Der}(\mathfrak{sl}(2, \C)) \subseteq \ad(\mathfrak{sl}(2, \C))$

$\Longrightarrow \ \ \text{Der}(\mathfrak{sl}(2, \C)) = \ad(\mathfrak{sl}(2, \C))$.
<Spacer size="5px"/>

$\ker \, \ad_{\mathfrak{sl}(2, \C)} = \{ 0 \}\,{}$ and $\mathfrak{sl}(2, \C)$ finite dimensional $\ \ \Longrightarrow \ \ \text{Der}(\mathfrak{sl}(2, \C)) \approx \mathfrak{sl}(2, \C))$.
<Spacer size="5px"/>

Is that relationship between the algebra and derivations of the algebra rare, common, or something in between?


---

### $\fg$ semisimple and finite dimensional $\quad \Longrightarrow \quad \text{Der}(\fg) \approx \fg$

*Verify:* 
$\ \kappa\ {}$ equals the restriction to $\ \ad(\fg)\ {}$ of the invariant bilinear form
$$
B(δ_1,δ_2) = \text{trace}(δ_1δ_2)
$$
on $\text{Der}(\fg)$. Let $I$ denote the $B$-orthogonal complement of $\ad(\fg)$, i.e.
$$
\setdef {I} δ {\text{Der}(\fg)} {B(δ, \ad_\xi) = 0 \quad \forall \ \xi ∈ \fg}.
$$

$I$ is an ideal:
Given $\delta_1 \in I, \delta_2 \in \text{Der}(\fg), \xi \in \fg$,
$$
\eqa{
B([\delta_1, \delta_2], \ad_\xi) &= \text{trace}((\delta_1 \delta_2 - \delta_2 \delta_1) \ad_\xi) \\
&= - \text{trace}(\delta_1 (\ad_\xi \delta_2 -  \delta_2 \ad_\xi ) ) \\
&= - B(\delta_1, \underbrace{[\ad_\xi, \delta_2]}_{\in \, \ad(\fg)})\\
&= 0
}
$$
since $\ad(\fg)$ is an ideal. Hence $I$ is an ideal.

---

#### Second slide of proof that $\fg$ semisimple and finite dimensional $\quad \Longrightarrow \quad \text{Der}(\fg) \approx \fg$
<Spacer size="5px"/>

$\,\ad(\fg) \,{}$ and $I$ ideals of $\,\text{Der}(\fg) \ \ \Longrightarrow$
$$
[I, \ad(\fg)] \subseteq I ∩ \ad(\fg).
$$
<Spacer size="2px"/>

The [Cartan semisimplicity criterion](Cartan-solvability-semisimplicity-criteria) $\ \ \Longrightarrow \ \ {}$ the Killing form of $\fg$ is non-degenerate 
$\ \ \Longrightarrow$
$$
I ∩ \ad(\fg) = \{ 0 \}.
$$

$δ \in I \quad \Longrightarrow$
$$
0 = [δ, \ad_\xi] = \ad_{δ(\xi)} \qquad \forall \ \xi \in \fg.
$$

Semisimplicity of $\fg \quad \Longrightarrow \quad Z(\fg) = \{0\} \quad \Longrightarrow \quad  \ad: \fg \to \text{Der}(\fg) \ {}$ is injective, so
$$
\ad_{δ(\xi)} = 0  \quad \forall \ \xi \in \fg \qquad \Longrightarrow \qquad δ = 0.
$$

Hence $I = \{0\}$.

---

#### Third slide of proof that $\fg$ semisimple and finite dimensional $\quad \Longrightarrow \quad \text{Der}(\fg) \approx \fg$
<Spacer size="5px"/>

Semisimplicity of $\fg \ \ \Longrightarrow \ \ {}$ the Killing form is nondegenerate 

$\Longrightarrow \ \ {}$ the restriction of $B$ to $\ad(\fg)$ is non-degenerate.
<Spacer size="2px"/>

$\text{Der}(\fg)$ finite dimensional and $I = \{0\} \ \ \Longrightarrow \ \ \text{Der}(\fg) = \ad(\fg)$.

Injectivity of $\ad \ \ \Longrightarrow \ \ \ad: \fg \to \text{Der}(\fg)$ is an isomorphism.

<!--
We don’t know that $B$ is nondegenerate on $\text{Der}(\fg)$, so we can't immediately  conclude that $\text{Der}(\fg) = \ad(\fg)$. We need to use the nondegeneracy of $\kappa$.

Given $\ δ ∈ \text{Der}(\fg), \quad \exists! \ \xi \in \fg$ satisfying
$$
B(δ, \ad_\eta) = \kappa(\xi, \eta) \qquad \forall \eta \in \fg.
$$
Hence
$$
\eqa{
B(δ− \ad_\xi, \ad_\eta)&= B(δ, \ad_\eta) - B(\ad_\xi, \ad_\eta) \\
&= B(δ, \ad_\eta) - \kappa(\xi, \eta) \\
&= 0.
}
$$
Hence
$$
δ− \ad_\xi \in I = \{0\}, \qquad \text{so} \qquad δ = \ad_\xi,
$$
and $\ \ad: \fg → \text{Der}(\fg)\ {}$ is an isomorphism.
-->
<Spacer size="5px"/>

***Consequence:*** $\fg$ semisimple and finite dimensional $\ \ \Longrightarrow \ \ {}$ the Lie algebra of $\ \text{Aut}(\fg)$ is isomorphic to  $\fg$.
<Spacer size="5px"/>

***Consequence:*** $G$ a connected Lie group with semisimple Lie algebra $\fg\ \ \Longrightarrow \ \ \text{Aut}(\fg)/\Ad(G)$ is discrete.


-------

### Properties of Lie algebras of compact Lie groups

If $G$ is a compact real Lie group, with Lie algebra $\fg,  \ {}$ then 
1. $\fg$ is *reductive*, i.e. $\text{rad}(\fg) = Z(\fg)$. <br/> Equivalently, $\fg$ is isomorphic to a dirct sum of a semisimple Lie algebra and an Abelian Lie algebra.

2. The Killing form $\kappa$ of $\fg$ is negative semi-definite, with $\ker \kappa = Z(\fg)$.

3. $\fg/Z(\fg)\ {}$ is semisimple, with negative definite Killing form.
<Spacer size="5px"/>

*Verify:* Let $(V, {\rm P})\ {}$ be a complex $n$-dimensional $G$-representation, and $(V, ρ)\ {}$ the associated $\fg$-module, with
$$
\rho(\xi)(v) = \dep {P(\exp(\epsilon \, \xi))(v)}.
$$ 

[Compactness of $G \ \ \Longrightarrow \ \ {\rm P}\ {}$ is unitary.](compact-implies-unitary-representations)

---

#### Second slide of proof of properties of Lie algebras of compact Lie groups
<Spacer size="5px"/>

${\rm P}\ {}$ unitary $\ \ \Longrightarrow$
$$
ρ(\fg) ⊆ \mathfrak{u}(V) 
\approx \mathfrak{u}(n),
% & = \{ \xi \in \C^{n \times n} \ : \ \xi + \xi^* = 0\}.
$$

the Lie algebra of skew-Hermitian $n \times n$ matrices. The bilinear form 
$$
B(\xi, \eta) := \text{trace} (\xi \, \eta)
$$ 
on $\mathfrak{u}(n)$ is negative definite, since 
$$
\eqa{
B(\xi, \xi) &= \text{trace} (\xi \, \xi) \phantom{\sum} \\
&= \text{trace} (\xi (- \xi^*)) \phantom{\sum}\\
&= - \text{trace} (\xi^* \xi) \phantom{\sum}\\
&= - \textstyle{\sum_{j, k = 1}^n} |\xi_{jk}|^2.
}
$$

---

#### Third slide of proof of properties of Lie algebras of compact Lie groups
<Spacer size="5px"/>

$\ ρ(\fg) ⊆  \mathfrak{u}(V) \quad \Longrightarrow\quad{}$ the bilinear form
$$
B_V(\xi, \eta) := B(ρ(\xi)ρ(\eta))
$$
on $\fg$ is negative semi-definite, with 
$$
\ker B_V = \ker ρ.
$$
<Spacer size="5px"/>

Application to the complexified adjoint representation $\Ad: G → GL(\fg, \C)\ {}$ and the complexification of the $\fg$-module $(\fg, \ad) \ \ \Longrightarrow \ \ \kappa\ {}$ is negative semi-definite, with
$$
\ker \kappa = \ker \ad = Z(\fg),
$$ 
and $\fg/Z(\fg)\ {}$ is semisimple 

$\Longrightarrow \ \ \fg \approx (\fg/Z(\fg)) \oplus {Z(\fg)}$ is reductive.

---

### $\fg$ real and semisimple, with negative definite Killing form  $\ \ \Longrightarrow \ \ \exists \ {}$ compact group with Lie algebra isomorphic to $\fg$

Since [$\text{Aut}(\fg)\ {}$ is a closed Lie subgroup](Aut-closed-subgroup) of $\ GL(\fg)$, [Lie's Theorems](Lies-three-theorems) $\ \ \Longrightarrow \ \ {}$ there is a connected Lie group $G$ with algebra $\fg$. 
<Spacer size="1px"/>

$\Ad(G)\ {}$ is the connected component of $\ \text{Aut}(\fg)\ {}$ containing the identity.

We'll now show that $\Ad(G)$ is compact.

$$
\eqa{
\Ad_g(\ad_\xi(\eta)) &= \Ad_g([\xi, \eta]) \\
&= [\Ad_g(\xi), \Ad_g(\eta)]) \\
&= \ad_{\Ad_g(\xi)}(\Ad_g(\eta))
}
$$
$\forall \ \xi, \eta \in \fg \ \ \Longrightarrow$
$$
%\ad_{\Ad_g(\xi)}\, \Ad_g  = \Ad_g \,\ad_\xi \quad  \Longrightarrow \quad 
\ad_{\Ad_g(\xi)}  = \Ad_g \, \ad_\xi \, \Ad_{g^{-1}}.
$$

---

#### Second slide of proof of $\ \exists \ {}$ compact group with Lie algebra isomorphic to $\fg$
<Spacer size="5px"/>

Hence
$$
\eqa{
\kappa(\Ad_g(\xi), \Ad_g(\eta)) &= \text{trace}(\ad_{\Ad_g(\xi)}\, \ad_{\Ad_g(\eta)}) \phantom{\sum} \\
&= \text{trace}(\Ad_g \,\ad_\xi \,\Ad_{g^{-1}} \,\Ad_g \,\ad_\eta\, \Ad_{g^{-1}}) \phantom{\sum} \\
&= \text{trace}(\ad_\xi \,\ad_\eta)\phantom{\sum}  \\
&= \kappa(\xi, \eta),
}
$$
so $\kappa$ is invariant w.r.t. the adjoint action of $G$ on $\fg$.
<Spacer size="5px"/>

Negative-definiteness of $\ \kappa \ \Longrightarrow \ - \kappa\ {}$ is an $\Ad(G)$-invariant inner product on $\fg,\ {}$ so 
$$
\Ad(G) \subseteq O(\fg),
$$
the group of orthogonal transformations of $(\fg, - \kappa)$. 

---

#### Third slide of proof of $\ \exists \ {}$ compact group with Lie algebra isomorphic to $\fg$
<Spacer size="5px"/>

$O(\fg)$ is compact, since a choice of orthonormal basis for $\fg$ determines a continuous isomorphism of $\ O(\fg)\ {}$ with $\ O(n, \R)$, where
$n = \text{dim} \, \fg$, and $O(n, \R)\ {}$ is compact.

Since $\ \text{Aut}(\fg)\ {}$ is a closed subgroup of $\ GL(\fg), \ {}$ and $\ \Ad(G) \, {}$ is a  connected component of $\, \text{Aut}(\fg),$ compactness of $\ \Ad(G)\ {}$ follows from that of $\ O(\fg) \ {}$. 
